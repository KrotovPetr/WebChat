import { TChatContext } from '../../src/modules/chatPageModules/types'
import { TEditContext } from '../../src/modules/editProfilePageModules/types'
import { TLoginContext } from '../../src/modules/loginPageModules/types'
import { TServerErrorContext } from '../../src/modules/serverErrorModules/types'
import { TErrorContext } from '../../src/modules/errorPageModules/types'
import { TRegContext } from '../../src/modules/registrationPageModules/types'
import { TProfileContext } from '../../src/modules/profilePageModules/types'

export type TTemplatorContext = TChatContext | TEditContext | TLoginContext | TServerErrorContext | TErrorContext | TRegContext | TProfileContext;