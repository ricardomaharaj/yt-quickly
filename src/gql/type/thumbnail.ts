import { builder } from '../builder'

builder.objectType('Thumbnail', {
	fields: (t) => ({
		url: t.exposeString('url'),
	}),
})

builder.objectType('Thumbnails', {
	fields: (t) => ({
		default: t.expose('default', { type: 'Thumbnail' }),
		high: t.expose('high', { type: 'Thumbnail' }),
		maxres: t.expose('maxres', { type: 'Thumbnail' }),
		medium: t.expose('medium', { type: 'Thumbnail' }),
		standard: t.expose('standard', { type: 'Thumbnail' }),
	}),
})
