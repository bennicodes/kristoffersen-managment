export default {
  name: 'mediaItem',
  title: 'Media Item',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the display order (lower numbers appear first)',
    },

    /* ---- IMAGE ---- */
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}) => parent?.type !== 'image',
      validation: (Rule) =>
        Rule.custom((val, ctx) => {
          if (ctx.parent?.type === 'image' && !val) {
            return 'Image is required for type "Image"'
          }
          return true
        }),
    },

    /* ---- VIDEO ---- */
    {
      name: 'videoFile',
      title: 'Video File Upload',
      type: 'file',
      options: {accept: 'video/*'},
      hidden: ({parent}) => parent?.type !== 'video',
    },
    {
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo/direct)',
      type: 'url',
      hidden: ({parent}) => parent?.type !== 'video',
    },
  ],

  preview: {
    select: {
      type: 'type',
      media: 'image',
    },
    prepare({type, media, poster}) {
      return {
        title: type === 'image' ? 'Image' : 'Video',
        subtitle: type,
        media,
      }
    },
  },
}
