const $=document
const suggestion=[
  'javascript',
  'react',
  'vue',
  'html',
  'css',
  'typescript',
  'Make Chrome your own',
  'Set up',
  'browser',
  'simple',
  'Categories',
  'Haylou Products',
  'shopping cart',
  'zeynabjafari2002',
  'Book List',
  'Junior Frontend Developer',
  'Tehran',
  'Advanced ToDo List App',
  'context menu',
  'To Do List App ',
  'Waether App ',
  'different themes for profile',
  'loading page',
  'BMC website',
  'my simple projects',
  'live server',
  'display',
  'running',
  'click ',
  'navigate',
  'include',
  'target',
  'how can i help you',
  'shopping center',
  'turn a blind eye to something',
  'tone deaf',
  'get roasted',
  'to be under the weather',
  'pretty dead',
  'to bad mouth someone',
  'if i do say so myself',
  'podcast',
  'coding',
  'sample writting',
  'cheat sheet',
  'chat CPT',
  'ui ux designer',
  'programmer',
  'hacker',
  'xampp'
]
let result
let userFragment=$.createDocumentFragment()
let autoCompleteBox=$.querySelector('.autoCompleteBox')

let inputBox=$.querySelector('input')
let inputValue=inputBox.value

inputBox.addEventListener('keyup' , ()=>{
  result=suggestion.filter(
    function (words){
      return words.includes(inputBox.value)
    }
  )

  result.forEach(
    function (item){
      autoCompleteBox.innerHTML=''
      let suggestedList=$.createElement('p')
      suggestedList.innerHTML=item
      userFragment.append(suggestedList)

      settingOnclick(suggestedList)
    }
  )
  autoCompleteBox.append(userFragment)
})

function settingOnclick(wordElement){
  wordElement.addEventListener('click' , ()=>{
    inputBox.value=wordElement.innerHTML
  })
}




