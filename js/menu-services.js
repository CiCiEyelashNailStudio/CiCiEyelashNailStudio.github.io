// Define variables
const serviceNail = document.getElementById("service-details__nail");
const serviceLashExtension = document.getElementById("service-details__lash-extension");
const serviceLashFullSet = document.getElementById("service-details__full-set");
const serviceLashFill = document.getElementById("service-details__fill-service");
const serviceLashRemoval = document.getElementById("service-details__lash-removal");
const serviceSemiPermanantMakeup = document.getElementById(
    "service-details__semi-permanant-makeup"
);
const serviceBrow = document.getElementById("service-details__brow");
const serviceEyeliner = document.getElementById("service-details__eyeliner");
const serviceMTS = document.getElementById("service-details__mts");
const arrayOfServices = [
    serviceNail,
    serviceLashExtension,
    serviceLashFullSet,
    serviceLashFill,
    serviceLashRemoval,
    serviceSemiPermanantMakeup,
    serviceBrow,
    serviceEyeliner,
    serviceMTS,
];

// Define a function to toggle CSS display property of the elements above
function showThisService(service) {
    arrayOfServices.forEach((item) => {
        item.style.display = "none";
    });
    service.style.display = "flex";
}

function showNail() {
    serviceNail.style.display = "flex";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "none";
}

function showLashExtension() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "flex";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "none";
}

function showLashFullSet() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "flex";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "none";
}

function showLashFill() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "flex";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "none";
}

function showLashRemoval() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "flex";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "none";
}

function showSemiPermanantMakeup() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "flex";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "none";
}

function showBrowService() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "flex";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "none";
}

function showEyelinerService() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "flex";
    serviceMTS.style.display = "none";
}

function showMTS() {
    serviceNail.style.display = "none";
    serviceLashExtension.style.display = "none";
    serviceLashFullSet.style.display = "none";
    serviceLashFill.style.display = "none";
    serviceLashRemoval.style.display = "none";
    serviceSemiPermanantMakeup.style.display = "none";
    serviceBrow.style.display = "none";
    serviceEyeliner.style.display = "none";
    serviceMTS.style.display = "flex";
}
