import { Component } from '@angular/core';
import { SupplierService } from '../Services/Supplier.Service';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'list-supplier',
    templateUrl: './List.Supplier.html',
    styleUrls: ['./List.Supplier.css']
})

export class ListSupplier {
    displayedColumns = ['SupplierID', 'CompanyName', 'ContactName', 'Country', 'ActionButton'];
    dataSource: any;
    ELEMENT_DATA: Element[];


    constructor(private supplierService: SupplierService) {
        this.supplierService.GetSupplierList().subscribe(m => {
            this.ELEMENT_DATA = m;
            this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    DeleteSupplier(SupplierId: any) {
        this.supplierService.DeleteSupplier(SupplierId);
    }
}

export interface Element {
    Address: string;
    City: string;
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Country: string;
    Fax: string;
    HomePage: string;
    Phone: string;
    PostalCode: string;
    Products: string;
    Region: string;
    SupplierID: number;

}
