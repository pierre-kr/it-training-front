import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Formation {

    // TODO
    return new Formation(1, 'tout', 'Java, spring, hibernate',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis metus elit, vel facilisis justo aliquet in. Phasellus a suscipit diam. Proin eu sapien tortor. Duis justo magna, iaculis eget enim sed, lacinia luctus ipsum. Proin at mauris cursus, maximus neque nec, mattis eros. In sit amet neque in neque semper viverra eget nec neque. In eleifend lacus quis urna ultrices, vitae varius nisl tempus. Ut gravida sagittis tellus, pulvinar condimentum nunc mattis commodo. Cras non dolor et nunc feugiat congue. Aenean sed vestibulum tellus. Phasellus eleifend, purus sed pharetra imperdiet, ligula lorem placerat diam, nec rhoncus tellus nisi non dolor.'
      , 'http://test.fr', 'aucun', 'AOEFT', 'Formation JAVA', 1);

    // return this.httpClient.get<Formation>(`http://localhost:3000/formations/${id}`);
  }


}