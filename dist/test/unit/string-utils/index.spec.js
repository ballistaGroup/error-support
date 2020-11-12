/* global describe, it */
'use strict';

const chai = require('chai');

chai.use(require('dirty-chai'));
const expect = chai.expect;

const {
  toSnake,
  toUpperSnake,
  toLowerSnake,
  toCamel,
  toUpperCamel,
  toLowerCamel
} = require('../../../main/string-utils');

describe('unit tests of string-utils', function () {
  it('should convert camel case to snake', () => {
    expect(toSnake('FooBarBaz')).to.equal('foo_bar_baz');
    expect(toLowerSnake('FooBarBaz')).to.equal('foo_bar_baz');
    expect(toUpperSnake('FooBarBaz')).to.equal('FOO_BAR_BAZ');
    expect(toSnake('Foo')).to.equal('foo');
    expect(toSnake('foo')).to.equal('foo');
    expect(toSnake(undefined)).to.equal(undefined);
  });
  it('should convert snake to camel case', () => {
    expect(toCamel('ONE_TWO_THREE')).to.equal('OneTwoThree');
    expect(toUpperCamel('ONE_TWO_THREE')).to.equal('OneTwoThree');
    expect(toCamel('ONE_TWO_THREE', false)).to.equal('oneTwoThree');
    expect(toLowerCamel('ONE_TWO_THREE', false)).to.equal('oneTwoThree');
    expect(toCamel('ONE__TWO_THREE')).to.equal('OneTwoThree');
    expect(toCamel('ONE__TWO_THREE', false)).to.equal('oneTwoThree');
    expect(toCamel(undefined)).to.equal(undefined);
    expect(toCamel('ONE')).to.equal('One');
    expect(toCamel('ONE', false)).to.equal('one');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L3VuaXQvc3RyaW5nLXV0aWxzL2luZGV4LnNwZWMuanMiXSwibmFtZXMiOlsiY2hhaSIsInJlcXVpcmUiLCJ1c2UiLCJleHBlY3QiLCJ0b1NuYWtlIiwidG9VcHBlclNuYWtlIiwidG9Mb3dlclNuYWtlIiwidG9DYW1lbCIsInRvVXBwZXJDYW1lbCIsInRvTG93ZXJDYW1lbCIsImRlc2NyaWJlIiwiaXQiLCJ0byIsImVxdWFsIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0FELElBQUksQ0FBQ0UsR0FBTCxDQUFTRCxPQUFPLENBQUMsWUFBRCxDQUFoQjtBQUNBLE1BQU1FLE1BQU0sR0FBR0gsSUFBSSxDQUFDRyxNQUFwQjs7QUFFQSxNQUFNO0FBQUVDLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUEsWUFBWDtBQUF5QkMsRUFBQUEsWUFBekI7QUFBdUNDLEVBQUFBLE9BQXZDO0FBQWdEQyxFQUFBQSxZQUFoRDtBQUE4REMsRUFBQUE7QUFBOUQsSUFBK0VSLE9BQU8sQ0FBQyw0QkFBRCxDQUE1Rjs7QUFFQVMsUUFBUSxDQUFDLDRCQUFELEVBQStCLFlBQVk7QUFDakRDLEVBQUFBLEVBQUUsQ0FBQyxvQ0FBRCxFQUF1QyxNQUFNO0FBQzdDUixJQUFBQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxXQUFELENBQVIsQ0FBTixDQUE2QlEsRUFBN0IsQ0FBZ0NDLEtBQWhDLENBQXNDLGFBQXRDO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLFdBQUQsQ0FBYixDQUFOLENBQWtDTSxFQUFsQyxDQUFxQ0MsS0FBckMsQ0FBMkMsYUFBM0M7QUFDQVYsSUFBQUEsTUFBTSxDQUFDRSxZQUFZLENBQUMsV0FBRCxDQUFiLENBQU4sQ0FBa0NPLEVBQWxDLENBQXFDQyxLQUFyQyxDQUEyQyxhQUEzQztBQUNBVixJQUFBQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxLQUFELENBQVIsQ0FBTixDQUF1QlEsRUFBdkIsQ0FBMEJDLEtBQTFCLENBQWdDLEtBQWhDO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLEtBQUQsQ0FBUixDQUFOLENBQXVCUSxFQUF2QixDQUEwQkMsS0FBMUIsQ0FBZ0MsS0FBaEM7QUFDQVYsSUFBQUEsTUFBTSxDQUFDQyxPQUFPLENBQUNVLFNBQUQsQ0FBUixDQUFOLENBQTJCRixFQUEzQixDQUE4QkMsS0FBOUIsQ0FBb0NDLFNBQXBDO0FBQ0QsR0FQQyxDQUFGO0FBU0FILEVBQUFBLEVBQUUsQ0FBQyxvQ0FBRCxFQUF1QyxNQUFNO0FBQzdDUixJQUFBQSxNQUFNLENBQUNJLE9BQU8sQ0FBQyxlQUFELENBQVIsQ0FBTixDQUFpQ0ssRUFBakMsQ0FBb0NDLEtBQXBDLENBQTBDLGFBQTFDO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDLGVBQUQsQ0FBYixDQUFOLENBQXNDSSxFQUF0QyxDQUF5Q0MsS0FBekMsQ0FBK0MsYUFBL0M7QUFDQVYsSUFBQUEsTUFBTSxDQUFDSSxPQUFPLENBQUMsZUFBRCxFQUFrQixLQUFsQixDQUFSLENBQU4sQ0FBd0NLLEVBQXhDLENBQTJDQyxLQUEzQyxDQUFpRCxhQUFqRDtBQUNBVixJQUFBQSxNQUFNLENBQUNNLFlBQVksQ0FBQyxlQUFELEVBQWtCLEtBQWxCLENBQWIsQ0FBTixDQUE2Q0csRUFBN0MsQ0FBZ0RDLEtBQWhELENBQXNELGFBQXREO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLGdCQUFELENBQVIsQ0FBTixDQUFrQ0ssRUFBbEMsQ0FBcUNDLEtBQXJDLENBQTJDLGFBQTNDO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLGdCQUFELEVBQW1CLEtBQW5CLENBQVIsQ0FBTixDQUF5Q0ssRUFBekMsQ0FBNENDLEtBQTVDLENBQWtELGFBQWxEO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDTyxTQUFELENBQVIsQ0FBTixDQUEyQkYsRUFBM0IsQ0FBOEJDLEtBQTlCLENBQW9DQyxTQUFwQztBQUNBWCxJQUFBQSxNQUFNLENBQUNJLE9BQU8sQ0FBQyxLQUFELENBQVIsQ0FBTixDQUF1QkssRUFBdkIsQ0FBMEJDLEtBQTFCLENBQWdDLEtBQWhDO0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQVIsQ0FBTixDQUE4QkssRUFBOUIsQ0FBaUNDLEtBQWpDLENBQXVDLEtBQXZDO0FBQ0QsR0FWQyxDQUFGO0FBV0QsQ0FyQk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBkZXNjcmliZSwgaXQgKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjaGFpID0gcmVxdWlyZSgnY2hhaScpXG5jaGFpLnVzZShyZXF1aXJlKCdkaXJ0eS1jaGFpJykpXG5jb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdFxuXG5jb25zdCB7IHRvU25ha2UsIHRvVXBwZXJTbmFrZSwgdG9Mb3dlclNuYWtlLCB0b0NhbWVsLCB0b1VwcGVyQ2FtZWwsIHRvTG93ZXJDYW1lbCB9ID0gcmVxdWlyZSgnLi4vLi4vLi4vbWFpbi9zdHJpbmctdXRpbHMnKVxuXG5kZXNjcmliZSgndW5pdCB0ZXN0cyBvZiBzdHJpbmctdXRpbHMnLCBmdW5jdGlvbiAoKSB7XG4gIGl0KCdzaG91bGQgY29udmVydCBjYW1lbCBjYXNlIHRvIHNuYWtlJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0b1NuYWtlKCdGb29CYXJCYXonKSkudG8uZXF1YWwoJ2Zvb19iYXJfYmF6JylcbiAgICBleHBlY3QodG9Mb3dlclNuYWtlKCdGb29CYXJCYXonKSkudG8uZXF1YWwoJ2Zvb19iYXJfYmF6JylcbiAgICBleHBlY3QodG9VcHBlclNuYWtlKCdGb29CYXJCYXonKSkudG8uZXF1YWwoJ0ZPT19CQVJfQkFaJylcbiAgICBleHBlY3QodG9TbmFrZSgnRm9vJykpLnRvLmVxdWFsKCdmb28nKVxuICAgIGV4cGVjdCh0b1NuYWtlKCdmb28nKSkudG8uZXF1YWwoJ2ZvbycpXG4gICAgZXhwZWN0KHRvU25ha2UodW5kZWZpbmVkKSkudG8uZXF1YWwodW5kZWZpbmVkKVxuICB9KVxuXG4gIGl0KCdzaG91bGQgY29udmVydCBzbmFrZSB0byBjYW1lbCBjYXNlJywgKCkgPT4ge1xuICAgIGV4cGVjdCh0b0NhbWVsKCdPTkVfVFdPX1RIUkVFJykpLnRvLmVxdWFsKCdPbmVUd29UaHJlZScpXG4gICAgZXhwZWN0KHRvVXBwZXJDYW1lbCgnT05FX1RXT19USFJFRScpKS50by5lcXVhbCgnT25lVHdvVGhyZWUnKVxuICAgIGV4cGVjdCh0b0NhbWVsKCdPTkVfVFdPX1RIUkVFJywgZmFsc2UpKS50by5lcXVhbCgnb25lVHdvVGhyZWUnKVxuICAgIGV4cGVjdCh0b0xvd2VyQ2FtZWwoJ09ORV9UV09fVEhSRUUnLCBmYWxzZSkpLnRvLmVxdWFsKCdvbmVUd29UaHJlZScpXG4gICAgZXhwZWN0KHRvQ2FtZWwoJ09ORV9fVFdPX1RIUkVFJykpLnRvLmVxdWFsKCdPbmVUd29UaHJlZScpXG4gICAgZXhwZWN0KHRvQ2FtZWwoJ09ORV9fVFdPX1RIUkVFJywgZmFsc2UpKS50by5lcXVhbCgnb25lVHdvVGhyZWUnKVxuICAgIGV4cGVjdCh0b0NhbWVsKHVuZGVmaW5lZCkpLnRvLmVxdWFsKHVuZGVmaW5lZClcbiAgICBleHBlY3QodG9DYW1lbCgnT05FJykpLnRvLmVxdWFsKCdPbmUnKVxuICAgIGV4cGVjdCh0b0NhbWVsKCdPTkUnLCBmYWxzZSkpLnRvLmVxdWFsKCdvbmUnKVxuICB9KVxufSlcbiJdfQ==