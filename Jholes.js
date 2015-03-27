/**
 * Created by YS.Joyce on 3/25/2015.
 */
var holes = {0: 1,6: 1, 8: 2,9: 1,a: 1,b: 1,d: 1,e: 1,g: 1,o: 1,p: 1,q: 1,A: 1,B: 2,D: 1,O: 1,P: 1,Q: 1,R: 1}
  var holeCount = function(str) {
      var count = 0
      chars = str.split(" ")
      chars.foreach = function (stuff) {


          total += holes(stuff) || 0;

      };
      return total
  }
holeCount(yvonne)

