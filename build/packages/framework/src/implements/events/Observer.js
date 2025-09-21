export class Subject {
    constructor() {
        this.observers = new Map();
    }
    attach(observer) {
        this.observers.set(observer.id, observer);
    }
    detach(observer) {
        this.observers.delete(observer.id);
    }
    notify(data) {
        for (const observer of this.observers.values()) {
            observer.update(data);
        }
    }
}
export class Observer extends AbsIdentifier {
    constructor(subject) {
        super('');
        this.subject = subject;
        if (subject) {
            subject.attach(this);
        }
    }
}
//# sourceMappingURL=Observer.js.map