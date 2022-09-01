import { TChatContext } from '../../src/TempPages/chatPage/types';
import { TEditContext } from '../../src/TempPages/editProfilePage/types';
import { TLoginContext } from '../../src/TempPages/loginPage/types';
import { TServerErrorContext } from '../../src/TempPages/serverErrorPage/types';
import { TErrorContext } from '../../src/TempPages/NFPage/types';
import { TRegContext } from '../../src/TempPages/registrationPage/types';
import { TProfileContext } from '../../src/TempPages/profilePage/types';
import { TInputContext } from '../../src/Components/Input/types';

export type TTemplatorContext =
    | TChatContext
    | TEditContext
    | TLoginContext
    | TServerErrorContext
    | TErrorContext
    | TRegContext
    | TProfileContext
    | TInputContext;
