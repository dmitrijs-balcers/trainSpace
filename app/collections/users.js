Meteor.users.allow({
    update: function () {
        return true;
    },
    remove: function() {
        return true;
    }
});