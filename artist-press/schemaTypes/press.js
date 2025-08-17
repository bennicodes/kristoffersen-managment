export default {
  name: 'press',
  title: 'Press Article',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()},
    {name: 'date', title: 'Date', type: 'date', validation: (Rule) => Rule.required()},
    {name: 'outlet', title: 'Outlet / Source', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    },
    {name: 'backgroundImage', title: 'Background Image', type: 'image', options: {hotspot: true}},
  ],
}
