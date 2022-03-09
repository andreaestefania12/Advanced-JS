// Introduction: callbacks

function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

// load and execute the script at the given path
loadScript('/my/script.js');

// the code below loadScript
// doesn't wait for the script loading to finish
// ..

// Callback in callback

loadScript('/my/script.js', function(script) {

    alert(`Cool, the ${script.src} is loaded, let's load one more`);
  
    loadScript('/my/script2.js', function(script) {
      alert(`Cool, the second script is loaded`);
    });
  
  });

// Handling errors
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
}

loadScript('/my/script.js', function(error, script) {
    if (error) {
      // handle error
    } else {
      // script loaded successfully
    }
  });

//   Pyramid of Doom


loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...continue after all scripts are loaded (*)
            }
          });
  
        }
      });
    }
  });


//   --
  loadScript('1.js', step1);

  function step1(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', step2);
    }
  }
  
  function step2(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('3.js', step3);
    }
  }
  
  function step3(error, script) {
    if (error) {
      handleError(error);
    } else {
      // ...continue after all scripts are loaded (*)
    }
  }