const clipboardy = require("clipboardy");

const searchPluginCommand = (inputStr) => {
  // Return plugin's result in the form of 'items'
  let items = [];
  try {
    const result = eval(inputStr);
    if (!isNaN(result)) {
      items.push({
        title: result,
        subtitle: `${inputStr} = ${result}`,
        bundleId: "com.jopemachine.arvis-calculator-plugin-example",
        // Callback event when PluginOutputItem is clicked
        actionCallback: () => {
          clipboardy.write(result);
        },
      });
    }
  } catch (err) {
    // If inputStr is not proper numerical expression, catchs err.
    // Return an empty array to 'items' if you do not need to include this plugin's items.
  }

  return {
    items,
  };
};

// Export a function that has inputStr as a argument.
module.exports = searchPluginCommand;