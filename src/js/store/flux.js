const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterInfo: [],
			characterDetails: {}
		},
		actions: {
			getCharacters: async() => {
				const res = await fetch (`https://rickandmortyapi.com/api/character`)
				const data = await 

			}
			
			}
		}
	};
};

export default getState;
