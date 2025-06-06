"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrontendEvents_1 = __importDefault(require("./FrontendEvents"));
const events_1 = require("events");
const isInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
class EventManager {
    constructor() {
        if (isInBrowser) {
            // In a browser environment, use the FrontendEventEmitter (fallback for when browser hint didn't work)
            this.emitter = new FrontendEvents_1.default();
        }
        else {
            // In a Node.js environment, dynamically import the 'events' module
            // Create an instance of EventEmitter
            this.emitter = new events_1.EventEmitter();
        }
    }
    on(event, listener) {
        this.emitter.on(event, listener);
    }
    emit(event, ...args) {
        this.emitter.emit(event, ...args);
    }
    removeListener(event, listener) {
        this.emitter.removeListener(event, listener);
    }
    removeAllEventListeners() {
        this.emitter.removeAllListeners();
    }
}
exports.default = EventManager;
//# sourceMappingURL=EventManager.js.map