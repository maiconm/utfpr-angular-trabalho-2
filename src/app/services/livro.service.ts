import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private httpClient: HttpClient,
  ) { }
}
