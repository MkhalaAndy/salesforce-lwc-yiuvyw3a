import { createElement } from 'lwc';
import App from 'x/app';

const app = createElement('x-app', { is: App });
document.body.appendChild(app);
