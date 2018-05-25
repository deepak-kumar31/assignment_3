function solution1(a,b,c)
{
    var s=(a+b+c)/2
    var ar=Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return ar
}

function solution2(f)
{
   var c =5*(f-32)/9
   return c;
   
}
function solution3(a,b,c){   if (a > b)
    {
        if (a > c)
        {
            console.log("a is the greatest among three ")
        }
        else
        {
            console.log("c is the greatest among three ")
        }
    }
    else if (b > c)
        console.log("b is the greatest among three")
    else
        console.log("c is the greatest among three")
}
function solution4()
{ var ch=[]
    var str = "how are you doing today";
    var res = str.split(" ");
for(var i=0;i<res.length;i++){
    ch[i] = res[i].charAt(0).toUpperCase()+res[i].substring(1)
}

  return ch.join(" ")

}
function solution5(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true
  } 
  else {
    return false
  }
}

function solution7()
{var flag=true
    var c1="a"
var c2=c1.charCodeAt()
    var str="The quick brown fox jumps Over the lazy dog "
    var c=new Array(26)
   for(var i=0;i<c.length;i++){
c[i]=0
}
for(var i=0;i<str.length;i++)
c[str[i].toLowerCase().charCodeAt()-c2]++
   for(var i=0;i<26;i++)
{   if(c[i]==0)
   flag=false

}
if(flag==true)
console.log("string is panagram")
else
console.log("string is not panagram")
}

function solution8(){
    var flag=true
    var c1="a"
    var c2=c1.charCodeAt()
    var str="Thist"
    var c=new Array(26)
   for(var i=0;i<c.length;i++){
  c[i]=0
  }

for(var i=0;i<str.length;i++)
c[str[i].toLowerCase().charCodeAt()-c2]++
   
   for(var i=0;i<26;i++){
   if(c[i]>1)
   flag=false

}
if(flag==true)
console.log("string is isograms")
else
console.log("string is not isograms")
}


function solution9()
{
    var ch=""
    var str = "White anglo saxon protestant"
    var res = str.split(" ");

for(var i=0;i<res.length;i++){
    ch+= res[i].charAt(0).toUpperCase()
    
}console.log(ch)
}



function solution10(){
    var feed={post:[{
                    uname:"deepak",name:"dk",image:"abc",
                
                    postcontent:"img1",
                    like:["dee","raju","kumar"],
                    comments:["ads","ytr","west"],
                    share:["uyt","jhjksh","kjk"]
                },
                {
                    uname:"piyus",name:"piyush kiaad",image:"abc",
                    postcontent:"img1",
                    like:["dee","raju","kumar"],
                    comments:["ads","ytr","west"],
                    share:["uyt","jhjksh","kjk"]
                },
                {
                    uname:"piyu",name:"piyush kiaad",image:"abc",
                    postcontent:"img1",
                    like:["dee","raju","kumar"],
                    comments:["ads","ytr","west"],
                    share:["uyt","jhjksh","kjk"]

                },
                {
                    uname:"deepak",name:"dk",image:"abc",
                    postcontent:"img1",
                    like:["dee","raju","kumar"],
                    comments:["ads","ytr","west"],
                    share:["uyt","jhjksh","kjk"]

                },
                {
                    uname:"raju",name:"raju seth",image:"abc",
                    postcontent:"img1",
                    like:["dee","raju","kumar","jhkjhhk","jhk"],
                    comments:["kumar","dee","ytr","raju"],
                    share:["uyt","jhjksh","kjk"]
                },
                {
                        uname:"deepak",name:"dk",image:"abc",
                    
                        postcontent:"img1",
                        like:["dee","raju","kumar"],
                        comments:["ads","ytr","west"],
                        share:["uyt","jhjksh","kjk"]
                 },
                    {
                        uname:"piyus",name:"piyush kiaad",image:"abc",
                        postcontent:"img1",
                        like:["dee","raju","kumar"],
                        comments:["ads","ytr","west"],
                        share:["uyt","jhjksh","kjk"]
                    },
                    {
                        uname:"piyu",name:"piyush kiaad",image:"abc",
                        postcontent:"img1",
                        like:["dee","raju","kumar"],
                        comments:["ads","ytr","west"],
                        share:["uyt","jhjksh","kjk"]
    
                    },
                    {
                        uname:"deepak",name:"dk",image:"abc",
                        postcontent:"img1",
                        like:["dee","raju","kumar"],
                        comments:["ads","ytr","west"],
                        share:["uyt","jhjksh","kjk"]
    
                    },
                    {
                        uname:"raju",name:"raju seth",image:"abc",
                        postcontent:"img1",
                        like:["dee","raju","kumar","jhkjhhk","jhk"],
                        comments:["kumar","dee","ytr","raju"],
                        share:["uyt","jhjksh","kjk"]
                }]
            }
 var c=0;
for(i=0;i<feed.post.length;i++)
{
    
    if(feed.post[i].uname=="deepak")
    {
        c++;
    }
}
console.log("no of post of deepak is"+c)

console.log("like on 5th post is "+feed.post[4].like.length)

console.log("user liked on 5th post is "+feed.post[4].like)

console.log("first user who liked on 5th post "+feed.post[4].like[0])
var c=[]
var k=0;
for(i=0;i<feed.post[4].like.length;i++)
{
    for(j=0;j<feed.post[4].comments.length;j++)
    {   
       if(feed.post[4].like[i]==feed.post[4].comments[j])
       {
        c[k]=feed.post[4].like[i]
        k++
       }
    }
}
console.log(k+" people that have both liked and commented on 5th post. list of them is "+c)

var allcom=new Array()
//console.log(feed.post.length+" "+feed.post[i].comments.length)
for(i=0;i<10;i++)
{
    for(j=0;j<feed.post[i].comments.length;j++)
    {
        allcom.push(feed.post[i].comments[j])
    }

}
var count=1
var maxcount=1
var maxelement
for(i=0;i<allcom.length;i++)
{
    for(j=i+1;j<allcom.length;j++)
    {
        if(allcom[j]==allcom[i])
        {
            count++
            if(count>maxcount)
            maxcount=count
            maxelement=allcom[j]

        }
    }
}
console.log("person who commented more on top 10 post "+maxelement)
}




function solution11()
{
    var friends=[

            {fname:"deepak",lname:"kumar"},
            {fname:"raju",lname:"gupta"},
            {fname:"fake",lname:"singh"},
            {fname:"deepak",lname:"suman"},
            {fname:"raju",lname:"kumar"},
            {fname:"fake",lname:"singh"}
            ]
for(var i=0;i<friends.length;i++)
{
    friends[i].len=new Array();
}

    
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i].fname+" "+friends[i].lname)
    }
    console.log(friends.length)

    var c=0
    for(i=0;i<friends.length;i++)
    {
        if(friends[i].fname=="fake")
        {
        delete friends[i]
        friends.splice(i,1);
        c++
        }
    }
    console.log("after deleting fake id, list is")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }
    
    friends.push({fname:"raju",lname:"sharma"})
    friends.push({fname:"pappu",lname:"raj"})
    console.log("after adding two id, list is")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }

    function compare(a,b)
    {
        if(a.fname>b.fname)
        return 1
        if(a.fname<b.fname)
        return -1
        return 0
    }
    friends.sort(compare)
   
    console.log("after sorting list is ")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }


    for(i=0;i<friends.length;i++)
    {
        friends[i].len=friends[i].fname.length+friends[i].lname.length
    }
    function compare1(a,b)
    {
        if(a.len<b.len)
        return 1
        if(a.len>b.len)
        return -1
        return 0
    }
    console.log(friends)
    friends.sort(compare1)
    console.log("after sorting by length,list is ")
    for(i=0;i<friends.length;i++)
    {
         console.log(friends[i])
    }


    for(i=0;i<friends.length;i++)
    {
        console.log(friends[i].fname.charAt(0)+friends[i].lname.charAt(0))
    }

    console.log("list of friends who have same first name")
    for(i=0;i<friends.length;i++)
    {
        for(j=i+1;j<friends.length;j++)
        {
            if(friends[i].fname==friends[j].fname)
            {
                console.log(friends[i].fname+" "+friends[i].lname)
                console.log(friends[j].fname+" "+friends[j].lname)
            }
        }
            
    }
}
