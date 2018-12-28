/**
 * Created by 4an70 on 12/26/2018.
 */
({
    doInit: function(cmp, evt, helper) {
        helper.readWizardSteps(cmp, evt, helper);
    },

    doRender: function(cmp, evt, helper) {
        helper.applyStepsVisibility(cmp, evt, helper);
    },

    onBodyChange: function(cmp, evt, helper) {
        helper.readWizardSteps(cmp, evt, helper);
    },

    handleStepChange: function(cmp, evt, helper) {
        helper.moveWizardStep(cmp, evt, helper);
    },

    handleStepClick: function(cmp, evt, helper) {
        evt.preventDefault();
        evt.stopPropagation();
    }
})