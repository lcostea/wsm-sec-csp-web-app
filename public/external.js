var extButton = document.getElementById("extButton");

function testExternal() {
    extButton.addEventListener("click", function() {
        alert("External javascript!");
    });
}

testExternal();
