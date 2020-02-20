import { Observable } from 'rxjs';
import { ICurrentShow} from './icurrent-show';

export interface IShowService {
    getCurrentShow(name: string | number): Observable<ICurrentShow>
}
