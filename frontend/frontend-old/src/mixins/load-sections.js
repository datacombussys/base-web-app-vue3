// import App from '@/App.vue'
// console.log("App", App);

import { defineAsyncComponent, defineComponent } from 'vue'


// Utilities
import {
  camelCase,
  upperFirst,
} from 'lodash'


export default function (sections = []) {
  return {
    name: 'LoadSections',
		data: () => ({ 
			sections: [],
		}),

    // Iterates the provide list of components
    // and returns a function that returns a
    // Promise.
    // components: sections.reduce((acc, cur) => {
		//  const name = upperFirst(camelCase(cur))
		// 	const file = import(`@/views/sections/${name}.vue`)
			
		// 	console.log("file",file);
			
    //   acc[`Section${name}`] = () => file
		// 	// acc[`${name}`] = () => app.component("SectionInfo", defineAsyncComponent(() => import(`@/views/sections/${name}.vue`)))

		// 	console.log("acc", acc);

			

			
		// 	// return acc
      
    // }, {}),
		components: sections.map(n => {
			// console.log("n", n);
			const name = upperFirst(camelCase(n))
			const file = import(`@/views/sections/Info.vue`)
			// console.log("name", name);
			// console.log("import(`@/views/sections/${name}.vue`)", import(`@/views/sections/Info.vue`));
			// console.log("WTF");
			// console.log("App1", App);

			defineComponent({
				components: {file}
			})

			// app.component(name, import(`@/views/sections/${name}.vue`))

			// console.log("App2", App);

			// console.log("$refs", $refs);
		})
  }
}


// export default function (sections = []) {
//   return {
//     name: 'LoadSections',

//     // Iterates the provide list of components
//     // and returns a function that returns a
//     // Promise.
//     components: sections.reduce((acc, cur) => {
//       const name = upperFirst(camelCase(cur))

//       acc[`Section${name}`] = () => import(`@/views/sections/${name}.vue`)

//       return acc
//     }, {}),

//     data: () => ({ sections }),
//   }
// }
