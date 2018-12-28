/**
 * Created by 4an70 on 12/26/2018.
 */
({
    readWizardSteps: function(cmp, evt, helper) {
        const potentialWizardStepComponents = cmp.get("v.body");
        const wizardStepComponents = potentialWizardStepComponents.filter(component => {
            return component.isInstanceOf("c:lightningWizardStep");
        });
        const wizardSteps = wizardStepComponents.map(component => {
            return {label: component.get("v.label")};
        });
        cmp.set("v.stepComponents", wizardStepComponents);
        cmp.set("v.steps", wizardSteps);
    },

    applyStepsVisibility: function(cmp, evt, helper) {
        const wizardSteps = cmp.get("v.stepComponents");
        const currentStep = cmp.get("v.currentStep");
        wizardSteps.forEach((wizardStep, index) => {
            if (index === currentStep) {
                $A.util.removeClass(wizardStep, "slds-hide");
            } else if (!$A.util.hasClass(wizardStep, "slds-hide")) {
                $A.util.addClass(wizardStep, "slds-hide");
            }
        });
    },

    moveWizardStep: function(cmp, evt, helper) {
        const stepChange = evt.getParam("stepChange");
        const maxStepNumber = cmp.get("v.stepComponents").length;
        let newCurrentStep = cmp.get("v.currentStep") + stepChange;

        if (newCurrentStep < 0) {
            newCurrentStep = 0;
        }
        if (newCurrentStep >= maxStepNumber) {
            newCurrentStep = maxStepNumber - 1;
        }

        cmp.set("v.currentStep", newCurrentStep);
        cmp.set("v.currentStepName", 'step-' + newCurrentStep);
    }
})