function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: 'syl' })
      } else {
        reject('failed to find user')
      }
    }, 1000)
  })
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(userId===2){
            resolve([
                {title: "article1"},
                {title: "article2"}
            ])
        }else{
            reject("failed to find article")
        }
    }, 1000)
  })
}

async function main(){
    try{
        const user = await getUser(1)
        console.log(user.name)
        const posts = await getPosts(user.id)
        console.log(`${user.name}'s posts`, posts)
    }catch(err){
        console.log("error: ",err)
    }
}

main()
