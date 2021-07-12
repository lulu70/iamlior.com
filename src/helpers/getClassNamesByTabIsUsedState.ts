const getClassNamesByTabIsUsedState: (
  tabIsUsed: boolean
) => string = tabIsUsed => (tabIsUsed ? "focus" : "focus:outline-none")

export default getClassNamesByTabIsUsedState
