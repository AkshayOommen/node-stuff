function Person (firstName, lastName, salutation) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.salutation = salutation || '';
    this.displayName = function () {
        return `${this.salutation} ${this.firstName} ${this.lastName}!`;
    };
}

module.exports = Person;