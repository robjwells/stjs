/*

`process.nextTick` allows user code to run to completion, and then runs
the callback -- *before* the event loop can proceed.

`setImmediate` runs on the next tick of the event loop.

The node docs suggest to use `setImmediate` "in all cases":
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick-vs-setimmediate

(Also note the warning that the names should really be the opposite --
  process.nextTick runs immediately, *before* the next tick,
  setImmediate does not run immediately, only on the next tick.)

You would use `process.nextTick` when you need to run some code before
the next tick of the event loop. The example given in the docs is to
allow users to handle errors before the next tick of the event loop, or
to allow the user to bind a callback to an event, rather than deferring
this binding to the next tick of the loop and risking the callback
missing the event (because the poll phase when such events are handled
takes place before `setImmediate` callbacks).
*/
