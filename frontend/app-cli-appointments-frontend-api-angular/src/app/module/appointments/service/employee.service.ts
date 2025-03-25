/*
 * @fileoverview    {EmployeeService}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Injectable } from '@angular/core';
import { GenericService } from '@app/module/essential/service/generic.service';
import { EmployeeViewModel } from '../model/employee.model';

/**
 * TODO: Description of {@code EmployeeService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class EmployeeService extends GenericService<EmployeeViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/employee/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/employee`;
    public dtoList: string = `employeeDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EmployeeViewModel) {
        super(entityInstance);
    }

}
