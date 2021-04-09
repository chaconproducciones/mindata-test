import { MatPaginatorIntl } from '@angular/material';

export function CustomPaginatorLabels() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Items por página:';

  return customPaginatorIntl;
}