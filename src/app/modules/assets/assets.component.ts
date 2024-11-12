import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AssetsService } from '@app/shared/services/assets.service';
import { filter, Observable, Subject, switchMap, take, takeUntil } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Assets } from '@app/shared/modal/assest';
import { MatDialog } from '@angular/material/dialog';
import { AddAssetComponent } from './add-asset/add-asset.component';
import Swal from 'sweetalert2';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  $destroy: Subject<void> = new Subject<void>();
  displayedColumns: string[] = [
    'atmName',
    'manufacturer',
    'type',
    'serialNumber',
    'image',
    'actions',
  ];
  isLoading = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Assets>([]);
  toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  searchTerm!: any;

  @Output() listData = new EventEmitter<any>();

  constructor(
    private assetService: AssetsService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('assets')) {
      this.dataSource.data = JSON.parse(localStorage.getItem('assets') || '{}');
      this.listData.emit(this.dataSource.data);
    } else {
      this.isLoading = true;
      this.getAssets().subscribe({
        next: (assets) => {
          this.isLoading = false;
          this.dataSource.data = assets;
          this.listData.emit(this.dataSource.data);
          localStorage.setItem('assets', JSON.stringify(assets));
        },
        error: (error) => {
          this.isLoading = false;
          this.toast.fire({
            icon: 'error',
            title: 'Get assets failed',
          });
        },
      });
    }
  }

  getAssets(): Observable<Assets[]> {
    return this.assetService.getAllAssets().pipe(takeUntil(this.$destroy));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddAssetComponent, {
      height: '550px',
      width: '600px',
      disableClose: true,
    });
    dialogRef
      .afterClosed()
      .pipe(filter((result: any) => result.message === 'close'))
      .subscribe((result: any) => {
        this.isLoading = true;
        const payload = result.formData;
        this.assetService
          .addAsset(payload)
          .pipe(
            switchMap(() => this.getAssets()),
            takeUntil(this.$destroy),
          )
          .subscribe({
            next: (assets) => {
              this.isLoading = false;
              this.dataSource.data = assets;
              localStorage.setItem('assets', JSON.stringify(assets));
              this.toast.fire({
                icon: 'success',
                title: 'Add asset successfully',
              });
            },
            error: (error) => {
              this.isLoading = false;
              this.toast.fire({
                icon: 'error',
                title: 'Add asset failed',
              });
            },
          });
      });
  }

  onOpenEditDialog(asset: Assets) {
    const dialogRef = this.dialog.open(EditAssetComponent, {
      height: '550px',
      width: '600px',
      data: asset,
      disableClose: true,
    });
    dialogRef
      .afterClosed()
      .pipe(filter((result: any) => result.message === 'edit'))
      .subscribe((result: any) => {
        this.isLoading = true;
        const payload = result.formData;
        this.assetService
          .editAsset(asset?.id, payload)
          .pipe(
            switchMap(() => this.getAssets()),
            takeUntil(this.$destroy),
          )
          .subscribe({
            next: (assets) => {
              this.isLoading = false;
              this.dataSource.data = assets;
              localStorage.setItem('assets', JSON.stringify(assets));
              this.toast.fire({
                icon: 'success',
                title: 'Edit asset successfully',
              });
            },
            error: (error) => {
              this.isLoading = false;
              this.toast.fire({
                icon: 'error',
                title: 'Edit asset failed',
              });
            },
          });
      });
  }

  onDeleteAsset(asset: Assets) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '500px',
      data: {
        title: 'Delete asset',
        message: 'Are you sure you want to delete this asset?',
      },
      disableClose: true,
    });
    dialogRef
      .afterClosed()
      .pipe(filter((result: any) => result === 'delete'))
      .subscribe((result: any) => {
        this.isLoading = true;
        this.assetService
          .deleteAsset(asset?.id)
          .pipe(
            switchMap(() => this.getAssets()),
            takeUntil(this.$destroy),
          )
          .subscribe({
            next: (assets) => {
              this.isLoading = false;
              this.dataSource.data = assets;
              localStorage.setItem('assets', JSON.stringify(assets));
              this.toast.fire({
                icon: 'success',
                title: 'Delete asset successfully',
              });
            },
            error: (error) => {
              this.isLoading = false;
              this.toast.fire({
                icon: 'error',
                title: 'Delete asset failed',
              });
            },
          });
      });
  }

  onExportToCsv() {
    const data = this.dataSource.data.map(({ id, createdAt, ...rest }) => rest);
    this.assetService.exportToCsv(data);
  }

  onSearch() {
    if (this.searchTerm) {
      this.dataSource.filter = this.searchTerm.trim().toLowerCase();
    } 
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
