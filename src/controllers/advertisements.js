const advertisements = require('../data/advertisements')

class AdvertisementsController {
    get(request, response) {
        response.json(advertisements)
    }

    create(request, response) {
        advertisements.push({
            id: Date.now(),
            publishDate: 1234567,
            publishDateString: '08:46, сегодня',
            ownerId: 1234567,
            ownerLogin: 'Fertnam',
            bulletinSubject: 'UI/UX Designer (Владивосток)',
            bulletinText: 'Текст объявления ...',
            bulletinImagees: [],
        })

        response.end()
    }
}

module.exports = new AdvertisementsController()
