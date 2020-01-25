$(document).ready(function () {
    function trenchlessSteps() {
    /* STEP ONE */
    if (document.getElementById("fullVer")) {
      window.setTimeout(function () {
        $(".repipeCamera").addClass("CameraStepOne");
        $(".RepipeStepOne").addClass("StepHighlight");
        $(".StepOneDescription").addClass("StepDescriptionShow");

      }, 1000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera");
        $(".repipeCameraInside").addClass("repipeCameraMove");
      }, 2000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera-back");
      }, 4500);
      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera");
        $(".repipeCameraInside").removeClass("repipeCameraMove");

      }, 5500);

      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera-back");
        $(".repipeCamera").removeClass("CameraStepOne");
        $(".RepipeStepOne").removeClass("StepHighlight");
        $(".StepOneDescription").removeClass("StepDescriptionShow");
      }, 6000);
      /* STEP TWO */
      window.setTimeout(function () {
        $(".RepipeStepTwo").addClass("StepHighlight");
        $(".StepTwoDescription").addClass("StepDescriptionShow");
      }, 7000);
      window.setTimeout(function () {
        $(".hydro-insert").addClass("hydro-insert-in");
      }, 8000);

      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move");
      }, 9000);
      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move-back");
      }, 11000);
      window.setTimeout(function () {
        $(".hydro-insert").addClass("hydro-insert-out");
      }, 12000);
      window.setTimeout(function () {
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move-back");
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move");
        $(".hydro-insert").removeClass("hydro-insert-in");
        $(".hydro-insert").removeClass("hydro-insert-out");
        $(".RepipeStepTwo").removeClass("StepHighlight");
        $(".StepTwoDescription").removeClass("StepDescriptionShow");
      }, 12500);
      window.setTimeout(function () {
        $(".RepipeStepThree").addClass("StepHighlight");
        $(".StepThreeDescription").addClass("StepDescriptionShow");
      }, 13400);
      window.setTimeout(function () {
        $(".permaliner-insert").addClass("permaliner-insert-in");
      }, 14000);
      window.setTimeout(function () {
        $(".hideCIPP").addClass("flowCIPP");
      }, 14800);
      window.setTimeout(function () {
        $(".hideCIPPinside").addClass("hideCIPPinside-move");
      }, 15200);
      window.setTimeout(function () {
        $(".underPipe").addClass("underPipe-move");
      }, 15600);
      window.setTimeout(function () {
        $(".RepipeStepThree").removeClass("StepHighlight");
        $(".StepThreeDescription").removeClass("StepDescriptionShow");
      }, 17000);
      window.setTimeout(function () {
        $(".RepipeStepFour").addClass("StepHighlight");
        $(".StepFourDescription").addClass("StepDescriptionShow");
      }, 18000);
      window.setTimeout(function () {
        $(".hideCIPP").removeClass("flowCIPP");
      }, 19000);
      window.setTimeout(function () {
        $(".permaliner-insert").addClass("permaliner-insert-out");
      }, 22000);

      window.setTimeout(function () {

        $(".permaliner-insert").removeClass("permaliner-insert-in");
      }, 20700);
      window.setTimeout(function () {
        $(".permaliner-insert").removeClass("permaliner-insert-out");
      }, 26500);
      window.setTimeout(function () {
        $(".RepipeStepFour").removeClass("StepHighlight");
        $(".StepFourDescription").removeClass("StepDescriptionShow");
        $(".underPipe").removeClass("underPipe-move");
        $(".hideCIPPinside").removeClass("hideCIPPinside-move");
      }, 20700);
    } else if (document.getElementsByClassName("trenchlessBanner")[0]) {
      window.setTimeout(function () {
        $(".repipeCamera").addClass("CameraStepOne");
        $(".RepipeStepOne").addClass("StepHighlight");
        $(".StepOneDescription").addClass("StepDescriptionShow");

      }, 1000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera");
        $(".repipeCameraInside").addClass("repipeCameraMove");
      }, 2000);
      window.setTimeout(function () {
        $(".insidePipe").addClass("insidePipe-Camera-back");
      }, 4500);
      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera");
        $(".repipeCameraInside").removeClass("repipeCameraMove");

      }, 5500);

      window.setTimeout(function () {
        $(".insidePipe").removeClass("insidePipe-Camera-back");
        $(".repipeCamera").removeClass("CameraStepOne");
        $(".RepipeStepOne").removeClass("StepHighlight");
        $(".StepOneDescription").removeClass("StepDescriptionShow");
      }, 6000);
      /* STEP TWO */
      window.setTimeout(function () {
        $(".RepipeStepTwo").addClass("StepHighlight");
        $(".StepTwoDescription").addClass("StepDescriptionShow");
      }, 7000);
      window.setTimeout(function () {
        $(".hydro-insert").addClass("hydro-insert-in");
      }, 8000);

      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move");
      }, 9000);

      // window.setTimeout(function(){
      //$(".hydro-insert").addClass("hydro-insert-out");
      //},12000);
      window.setTimeout(function () {
        $(".RepipeStepTwo").removeClass("StepHighlight");
        $(".StepTwoDescription").removeClass("StepDescriptionShow");
      }, 12500);
      window.setTimeout(function () {
        $(".RepipeStepFour").addClass("StepHighlight");
        $(".StepThreeDescription").addClass("StepDescriptionShow");
      }, 13400);
      window.setTimeout(function () {
        $(".RepipeHydroInside").addClass("RepipeHydroInside-move-back");
      }, 14000);
      window.setTimeout(function () {
        $('.RepipeStepFour').removeClass('StepHighlight');
        $('.StepFourDescription').removeClass('StepDescriptionShow');
      }, 16200);

      window.setTimeout(function () {
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move-back");
        $(".RepipeHydroInside").removeClass("RepipeHydroInside-move");
        $(".hydro-insert").addClass("hydro-insert-out");
        $('.hydro-insert').removeClass('hydro-insert-in');
      }, 15600);

      window.setTimeout(function () {
        $('.hydro-insert').removeClass("hydro-insert-out");
      }, 16660);
    }
  }
  trenchlessSteps();
  setInterval(trenchlessSteps, 20000);
});