// https://www.npmjs.com/package/phi-accrual-detector
var phi_detector = require('phi-accrual-detector');
var mock_service_detector  = phi_detector.new_detector(1,2,1,1,0.1);
mock_service_detector.on('available', function (phi) {
    console.log("Sweet - the service is available!");
});

mock_service_detector.on('unavailable', function (phi) {
    console.log("Rats - the service has forsaken me");
});

var mock_service = setInterval(function() {
    mock_service_detector.signal();
  }, 100);