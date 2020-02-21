import { Observable } from 'rxjs';
import { ICurrentShow, ICurrentShowList} from './icurrent-show';

export interface IShowService {
    getCurrentShow(name: string | number): Observable<ICurrentShowList>
}
