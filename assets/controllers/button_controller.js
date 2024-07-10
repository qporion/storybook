import {Controller} from '@hotwired/stimulus';

export default class extends Controller
{
    hideButton()
    {
        this.element.style.display = 'none';
    }

    changeButtonColor() {
        this.element.style.display = 'block';
        this.element.style.backgroundColor = '#b300ff';
    }
}