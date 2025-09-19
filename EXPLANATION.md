A decision, influenced by the BOB coding standards, was made to split the rendering into two separate functions renderFilter()
and renderList(). This was done to organise the HTML into smaller and more manageable sections. This can be enhanced by breaking down HTML further, potentially composing the list of smaller render functions e.g. renderProgressOptions().

Next I decided to use the useState hook to manage local state as I've encountered in initial tutorials and reading about React. State management was needed because the initial sample data was going to be modified and the application needed to keep track of the changing progress and time values, as well as the filtered list items.

For robustness and taking care of the buggy value, all steps' progress property is reset to 'pending' on initialisation.

The deliveries/steps state needed to update based on user selected values from the progress radio inputs. I created a function to handle the onChange event for each input, passing the item ID and input (progress) value. The progress options for each step are identical, so I used an array of progressValues (key, val pairs) to make display of progress options more terse. This might be overly complex for this scenario, progressValues could have been an array of strings and case manipulation could have used for display purposes.

On handling a progress value change, the deliveries are iterated (using Array.map) and progress value is updated according to requirement relating to the other steps' values. This could potentially be improved by moving step to its own component and managing each step's individual state inside the component. Steps can then be made aware of other steps state/value using Props. The requirement - If a previously `done` step is changed back to `pending` or `current`, later steps must be reset to `pending` and their times cleared - is satisfied by using a brute force approach - all steps after the updated step is reset.

Sequential disabling is achieved by assigning inputs' disabled property to a function returning a boolean value which is calculated based on all steps' progress values. This could definitely be made more readable. It was mostly coded based on manual testing and trial and error. I'm also not sure what best practises are for React in terms of returning values by function in the template, I'll need to investigate this further.

Filtering of the list was done with the help of AI and I modified the response to better fit my needs. Filtering seems a bit janky currently and optimised rendering needs to be explored.
