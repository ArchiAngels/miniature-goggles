function namespace(root, path, value){

  console.log("START")
  
    path = path.split('.');
    
    console.log('path::',path,'v::',value);
    
    let set = (v)=>{

      console.log("NEW SET");
      console.log("NEW SET");

      let output = saveChanges(v);
      // console.log("STE:::",output);
      stuff = output;
      root = output;

     return  output;
      
    }
    
    let read = ()=>{
      console.log("NEW READ");
      console.log("NEW READ");
      
      return readOBJUntil();
    }


    let readOBJUntil = () =>{

      let read  = (body = root,index = 0) =>{

        

        if(body[`${path[index]}`] == undefined){
          return undefined
        }else if(index == path.length -1){
          console.log('read',body[`${path[index]}`],path,index);
          return body[`${path[index]}`];
        }else{
          console.log('read',root[`${path[index]}`],path,index);
          // console.log(body);
            body = body[`${path[index]}`];
            // console.log(body);
            index++;
          return read(body,index);
        }

      }
      let uotput = read();
      console.log('uotput::',uotput);
      return uotput;

    }

    let saveChanges = (value = undefined) =>{

      console.log('SAVE::::')

      let loop = (body = {}) =>{

        // console.log(body);
        let obj = {};

        if(path.length == 0){
          // obj[`${path[index]}`] = body;

          // console.log(body,root);

          root = body;

          // console.log(body,root);

          return root;
        }
        else if(Object.keys(body).length == 0){
          obj[`${path.pop()}`] = value;

          body[`${path.pop()}`] = obj;

          return loop(body);
        }
        else{
          if(path.length > 1){
            obj[`${path.pop()}`] = body;

            body[`${path.pop()}`] = obj;
  
            return loop(body);
          }else{
            obj[`${path.pop()}`] = body;

            body = obj;
  
            return loop(body);
          }
          
        }
      }

      let output = loop();

      console.log('output::',output);
      return output
        


    }
    
    
    return value ? set(value):read();
  }


  let stuff = {}

  // console.log("1::",stuff);
namespace(stuff, 'moreStuff.name', 'the stuff')
// console.log("2::",stuff);

namespace(stuff, 'moreStuff.name')

namespace(stuff, 'items.things',{ name: 'the thing' })

namespace(stuff, 'items.things')


// path:: [ 'items', 'things' ] v:: { name: 'the thing' }
// console.log("3::",stuff);

// namespace(stuff, 'moreStuff.evenMoreStuff.id', 1)
