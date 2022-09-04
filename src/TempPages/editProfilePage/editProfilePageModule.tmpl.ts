import { editContext } from './editProfileContext';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';

export function editPage(): string {
    return `
    <div class = {{"classNames.pageContainer"}}>
    <main class = {{"classNames.formContainer"}}>
        {{editForm}}
        <a class = {{"classNames.linkText"}} href={{"links.profileLink"}}>{{"data.cancel"}}</a>
    </main>
</div>`;
}
