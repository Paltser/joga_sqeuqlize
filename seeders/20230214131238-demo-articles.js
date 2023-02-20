'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('Articles', [{
          name: 'Introduction to ashtanga',
          slug: 'introduction-to-ashtanga',
          image: 'ashtanga.jpg',
          body: 'Ashtanga yoga is a dynamic form of yoga that is based on a series of poses. It is a vigorous practice that combines breath control, self-observation and meditation or relaxation. The word ashtanga means eight limbs in Sanskrit, which refers to the eight limbs of yoga described in Patanjali’s Yoga Sutras, the foundational text of yoga philosophy. Ashtanga yoga is also sometimes called “power yoga” because of its focus on building strength and stamina. The practice of ashtanga yoga is also known as “yoga chikitsa,” which means “yoga therapy.”',
          published: '2020-02-14 13:12:38',
            author_id: 1,
          createdAt: new Date(),
            updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Articles', [{
            name: 'morning vinyasa flow routine',
            slug: 'morning-vinyasa-flow-routine',
            image: 'morning.jpg',
            body: 'This is a great morning yoga routine to start your day. It is a vinyasa flow sequence that will help you wake up an energize your body. It is a great way to start your day and get your blood flowing. This sequence is great for beginners and advanced yogis alike. It is a great way to start your day and get your blood flowing. This sequence is great for beginners and advanced yogis alike. It is a great way to start your day and get your blood flowing. This sequence is great for beginners and advanced yogis alike.',
            published: '2018-04-24 13:12:38',
            author_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Articles', [{
            name: 'Secrets o fa yoga teacher',
            slug: 'secrets-of-a-yoga-teacher',
            image: 'teacher.jpg',
            body: 'Yoga teachers are a special breed. They are a mix of healer, teacher, and friend. They are the ones who guide you through your practice, help you to find your inner peace, and help you to find your inner strength. They are the ones who guide you through your practice, help you to find your inner peace, and help you to find your inner strength. They are the ones who guide you through your practice, help you to find your inner peace, and help you to find your inner strength. They are the ones who guide you through your practice, help you to find your inner peace, and help you to find your inner strength.',
            published: '2019-02-14 13:12:38',
            author_id: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
  ]);
    },
  down(queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkDelete('Articles', null, {})
    ]);
    }
};