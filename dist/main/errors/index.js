'use strict';
/**
 * `CodedError` & various `CodedError` subclasses.
 */

module.exports = {
  CodedError: require('./CodedError'),
  AlreadyInitializedError: require('./AlreadyInitializedError'),
  ClassNotExtendableError: require('./ClassNotExtendableError'),
  IllegalArgumentError: require('./IllegalArgumentError'),
  IllegalArgumentTypeError: require('./IllegalArgumentTypeError'),
  IllegalStateError: require('./IllegalStateError'),
  MethodNotImplementedError: require('./MethodNotImplementedError'),
  MissingRequiredArgumentError: require('./MissingRequiredArgumentError'),
  NotInitializedError: require('./NotInitializedError')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL2Vycm9ycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiQ29kZWRFcnJvciIsInJlcXVpcmUiLCJBbHJlYWR5SW5pdGlhbGl6ZWRFcnJvciIsIkNsYXNzTm90RXh0ZW5kYWJsZUVycm9yIiwiSWxsZWdhbEFyZ3VtZW50RXJyb3IiLCJJbGxlZ2FsQXJndW1lbnRUeXBlRXJyb3IiLCJJbGxlZ2FsU3RhdGVFcnJvciIsIk1ldGhvZE5vdEltcGxlbWVudGVkRXJyb3IiLCJNaXNzaW5nUmVxdWlyZWRBcmd1bWVudEVycm9yIiwiTm90SW5pdGlhbGl6ZWRFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7OztBQUdBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsRUFBQUEsVUFBVSxFQUFFQyxPQUFPLENBQUMsY0FBRCxDQURKO0FBRWZDLEVBQUFBLHVCQUF1QixFQUFFRCxPQUFPLENBQUMsMkJBQUQsQ0FGakI7QUFHZkUsRUFBQUEsdUJBQXVCLEVBQUVGLE9BQU8sQ0FBQywyQkFBRCxDQUhqQjtBQUlmRyxFQUFBQSxvQkFBb0IsRUFBRUgsT0FBTyxDQUFDLHdCQUFELENBSmQ7QUFLZkksRUFBQUEsd0JBQXdCLEVBQUVKLE9BQU8sQ0FBQyw0QkFBRCxDQUxsQjtBQU1mSyxFQUFBQSxpQkFBaUIsRUFBRUwsT0FBTyxDQUFDLHFCQUFELENBTlg7QUFPZk0sRUFBQUEseUJBQXlCLEVBQUVOLE9BQU8sQ0FBQyw2QkFBRCxDQVBuQjtBQVFmTyxFQUFBQSw0QkFBNEIsRUFBRVAsT0FBTyxDQUFDLGdDQUFELENBUnRCO0FBU2ZRLEVBQUFBLG1CQUFtQixFQUFFUixPQUFPLENBQUMsdUJBQUQ7QUFUYixDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIGBDb2RlZEVycm9yYCAmIHZhcmlvdXMgYENvZGVkRXJyb3JgIHN1YmNsYXNzZXMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDb2RlZEVycm9yOiByZXF1aXJlKCcuL0NvZGVkRXJyb3InKSxcbiAgQWxyZWFkeUluaXRpYWxpemVkRXJyb3I6IHJlcXVpcmUoJy4vQWxyZWFkeUluaXRpYWxpemVkRXJyb3InKSxcbiAgQ2xhc3NOb3RFeHRlbmRhYmxlRXJyb3I6IHJlcXVpcmUoJy4vQ2xhc3NOb3RFeHRlbmRhYmxlRXJyb3InKSxcbiAgSWxsZWdhbEFyZ3VtZW50RXJyb3I6IHJlcXVpcmUoJy4vSWxsZWdhbEFyZ3VtZW50RXJyb3InKSxcbiAgSWxsZWdhbEFyZ3VtZW50VHlwZUVycm9yOiByZXF1aXJlKCcuL0lsbGVnYWxBcmd1bWVudFR5cGVFcnJvcicpLFxuICBJbGxlZ2FsU3RhdGVFcnJvcjogcmVxdWlyZSgnLi9JbGxlZ2FsU3RhdGVFcnJvcicpLFxuICBNZXRob2ROb3RJbXBsZW1lbnRlZEVycm9yOiByZXF1aXJlKCcuL01ldGhvZE5vdEltcGxlbWVudGVkRXJyb3InKSxcbiAgTWlzc2luZ1JlcXVpcmVkQXJndW1lbnRFcnJvcjogcmVxdWlyZSgnLi9NaXNzaW5nUmVxdWlyZWRBcmd1bWVudEVycm9yJyksXG4gIE5vdEluaXRpYWxpemVkRXJyb3I6IHJlcXVpcmUoJy4vTm90SW5pdGlhbGl6ZWRFcnJvcicpXG59XG4iXX0=