import { DeepMap, FieldError } from 'react-hook-form';
import { IFormInputs } from '../Form/types';

export interface IShareList extends IFormInputs {
    hashTags: string[];
    errors: DeepMap<IFormInputs, FieldError>
}
