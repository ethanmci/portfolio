const TagColour = (tag: string) => {
  switch (tag) {
    case 'Web':
      return 'bg-orange-600'
    case 'Game Development':
      return 'bg-green-600'
    case 'School':
      return 'bg-red-600'
    default:
      return 'bg-sky-600'
  }
}

export default TagColour