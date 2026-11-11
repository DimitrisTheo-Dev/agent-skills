// Isolated QA fixture. Not loaded by index.html.
Object.defineProperty(navigator, 'clipboard', {configurable:true, value:{writeText:() => Promise.reject(new DOMException('Forced rejection for manual-recovery inspection','NotAllowedError'))}});
