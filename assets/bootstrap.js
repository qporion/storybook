import {startStimulusApp} from "@symfony/stimulus-bundle";
import ButtonController from "./controllers/button_controller";

const app = startStimulusApp();
app.register('button', ButtonController);
