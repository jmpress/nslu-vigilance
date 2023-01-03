'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', [{
      name: 'Raleigh Hills',
      abbr: 'RH',
      street_address: '7300 SW Beaverton-Hillsdale Hwy.',
      city: 'Portland',
      state: 'OR',
      zip: '97225',
      phone_number: '503.292.6838',
      fax_number: '503.292.2349',
      store_manager: 'Jen Soltero',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sellwood',
      abbr: 'SW',
      street_address: '1214 SE Tacoma St.',
      city: 'Portland',
      state: 'OR',
      zip: '97202',
      phone_number: '503.230.4949',
      fax_number: '503.230.6975',
      store_manager: 'Tracy Smith',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Orenco Station',
      abbr: 'OS',
      street_address: '1453 NE 61st Avenue',
      city: 'Hillsboro',
      state: 'OR',
      zip: '97124',
      phone_number: '503.648.6968',
      fax_number: '503.693.8987',
      store_manager: 'Alexandra Alvelo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Concordia',
      abbr: 'CC',
      street_address: '5320 NE 33rd Avenue',
      city: 'Portland',
      state: 'OR',
      zip: '97211',
      phone_number: '503.288.3838',
      fax_number: '503.288.0193',
      store_manager: 'Erin Blaser',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Seven Corners',
      abbr: 'SC',
      street_address: '1954 SE Division Street',
      city: 'Portland',
      state: 'OR',
      zip: '97202',
      phone_number: '503.445.2888',
      fax_number: '503.546.5320',
      store_manager: 'Joe McCarthy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Arbor Lodge',
      abbr: 'AL',
      street_address: '6400 N Interstate Avenue',
      city: 'Portland',
      state: 'OR',
      zip: '97217',
      phone_number: '503.467.4777',
      fax_number: '503.517.0707',
      store_manager: 'Heather Williams',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mountain Park',
      abbr: 'MP',
      street_address: '3 Monroe Pkwy ste. R',
      city: 'Lake Oswego',
      state: 'OR',
      zip: '97035',
      phone_number: '503.496.1155',
      fax_number: '503.496.0208',
      store_manager: 'James Martin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cedar Hills',
      abbr: 'CH',
      street_address: '3495 SW Cedar Hills Boulevard',
      city: 'Beaverton',
      state: 'OR',
      zip: '97005',
      phone_number: '503.641.4181',
      fax_number: '503.641.4643',
      store_manager: 'Cody Jorgensen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Happy Valley',
      abbr: 'HV',
      street_address: '15861 SE Happy Valley Town Center Dr.',
      city: 'Happy Valley',
      state: 'OR',
      zip: '97086',
      phone_number: '503.558.9214',
      fax_number: '503.658.8293',
      store_manager: 'Ryan Pullar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hawthorne',
      abbr: 'HT',
      street_address: '4034 SE Hawthorne Blvd',
      city: 'Portland',
      state: 'OR',
      zip: '97214',
      phone_number: '503.236.4800',
      fax_number: '503.236.4811',
      store_manager: 'Nicole Heiden',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Progress Ridge',
      abbr: 'PR',
      street_address: '14805 SW Barrows Road ste. 103',
      city: 'Beaverton',
      state: 'OR',
      zip: '97007',
      phone_number: '503.597.6777',
      fax_number: '503.597.6767',
      store_manager: 'Keshaun King',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: `Fisher's Landing`,
      abbr: 'FL',
      street_address: '2100 B SE 164th Avenue, Ste 101',
      city: 'Vancouver',
      state: 'WA',
      zip: '98683',
      phone_number: '360.760.5005',
      fax_number: '360.882.1738',
      store_manager: 'Michael Butterfield',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Williams',
      abbr: 'WM',
      street_address: '3445 N. Williams Avenue',
      city: 'Portland',
      state: 'OR',
      zip: '97227',
      phone_number: '503.528.2888',
      fax_number: '503.288.8024',
      store_manager: 'David Goss',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nyberg Rivers',
      abbr: 'NR',
      street_address: '7703 SW Nyberg Street',
      city: 'Tualatin',
      state: 'OR',
      zip: '97062',
      phone_number: '503.692.3535',
      fax_number: '503.692.3536',
      store_manager: 'Scott Weseman',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Grant Park',
      abbr: 'GP',
      street_address: '3210 NE Broadway',
      city: 'Portland',
      state: 'OR',
      zip: '97232',
      phone_number: '503.282.2080',
      fax_number: '503.282.1113',
      store_manager: 'Shanon Conner',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Slabtown',
      abbr: 'ST',
      street_address: '2170 NW Raleigh Street',
      city: 'Portland',
      state: 'OR',
      zip: '97210',
      phone_number: '503.224.7522',
      fax_number: '503.229.7522',
      store_manager: 'Jared Ball',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Woodstock',
      abbr: 'WS',
      street_address: '4500 SE Woodstock Blvd.',
      city: 'Portland',
      state: 'OR',
      zip: '97206',
      phone_number: '503.771.9663',
      fax_number: '503.775.9663',
      store_manager: 'Brian Filson',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'University Park',
      abbr: 'UP',
      street_address: '6300 N. Lombard St.',
      city: 'Portland',
      state: 'OR',
      zip: '97203',
      phone_number: '503.289.0834',
      fax_number: '503.285.5648',
      store_manager: 'Patrick Roake',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Palisades',
      abbr: 'PAL',
      street_address: '1377 McVey Avenue',
      city: 'Lake Oswego',
      state: 'OR',
      zip: '97034',
      phone_number: '503.765.8788',
      fax_number: 'not available',
      store_manager: 'Jen Soltero',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
