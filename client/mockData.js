const mockData = [
  {
    'room_id': 1,
    'first_name': 'Rolland',
    'user_avatar': 'https://robohash.org/rerumnequeexplicabo.png?size=50x50&set=set1',
    'created_at': '9/24/16',
    'body': 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    'accuracy': 4,
    'communication': 4,
    'cleanliness': 5,
    'location': 1,
    'check_in': 1,
    'value': 5
  },
  {
    'room_id': 1,
    'first_name': 'Brigham',
    'user_avatar': 'https://robohash.org/utnonculpa.jpg?size=50x50&set=set1',
    'created_at': '4/21/17',
    'body': 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'accuracy': 4,
    'communication': 1,
    'cleanliness': 3,
    'location': 5,
    'check_in': 5,
    'value': 5
  },
  {
    'room_id': 1,
    'first_name': 'Olva',
    'user_avatar': 'https://robohash.org/impeditducimusquia.jpg?size=50x50&set=set1',
    'created_at': '8/12/16',
    'body': 'Morbi quis tortor id nulla ultrices aliquet.',
    'accuracy': 1,
    'communication': 3,
    'cleanliness': 1,
    'location': 4,
    'check_in': 5,
    'value': 4
  },
  {
    'room_id': 1,
    'first_name': 'Joell',
    'user_avatar': 'https://robohash.org/aspernaturreiciendisdignissimos.png?size=50x50&set=set1',
    'created_at': '4/26/16',
    'body': 'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    'accuracy': 3,
    'communication': 4,
    'cleanliness': 5,
    'location': 1,
    'check_in': 1,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Jule',
    'user_avatar': 'https://robohash.org/excepturivoluptatibusesse.bmp?size=50x50&set=set1',
    'created_at': '11/3/17',
    'body': 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    'accuracy': 5,
    'communication': 2,
    'cleanliness': 3,
    'location': 3,
    'check_in': 5,
    'value': 1
  },
  {
    'room_id': 1,
    'first_name': 'Udall',
    'user_avatar': 'https://robohash.org/reiciendistemporeprovident.bmp?size=50x50&set=set1',
    'created_at': '5/29/16',
    'body': 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    'accuracy': 4,
    'communication': 4,
    'cleanliness': 2,
    'location': 4,
    'check_in': 1,
    'value': 5
  },
  {
    'room_id': 1,
    'first_name': 'Dreddy',
    'user_avatar': 'https://robohash.org/etcupiditatedolores.bmp?size=50x50&set=set1',
    'created_at': '7/12/17',
    'body': 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    'accuracy': 2,
    'communication': 1,
    'cleanliness': 3,
    'location': 1,
    'check_in': 4,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Yale',
    'user_avatar': 'https://robohash.org/cupiditatedolordeserunt.jpg?size=50x50&set=set1',
    'created_at': '12/7/17',
    'body': 'Nulla ut erat id mauris vulputate elementum.',
    'accuracy': 1,
    'communication': 2,
    'cleanliness': 2,
    'location': 3,
    'check_in': 5,
    'value': 2
  },
  {
    'room_id': 1,
    'first_name': 'Rosalinda',
    'user_avatar': 'https://robohash.org/molestiasauttemporibus.jpg?size=50x50&set=set1',
    'created_at': '8/16/17',
    'body': 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    'accuracy': 1,
    'communication': 2,
    'cleanliness': 3,
    'location': 2,
    'check_in': 2,
    'value': 4
  },
  {
    'room_id': 1,
    'first_name': 'Cooper',
    'user_avatar': 'https://robohash.org/autquivoluptatum.jpg?size=50x50&set=set1',
    'created_at': '11/24/16',
    'body': 'Nulla nisl.',
    'accuracy': 5,
    'communication': 1,
    'cleanliness': 2,
    'location': 1,
    'check_in': 4,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Leslie',
    'user_avatar': 'https://robohash.org/natusimpeditfugiat.png?size=50x50&set=set1',
    'created_at': '6/14/16',
    'body': 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    'accuracy': 3,
    'communication': 2,
    'cleanliness': 5,
    'location': 4,
    'check_in': 4,
    'value': 1
  },
  {
    'room_id': 1,
    'first_name': 'Felicle',
    'user_avatar': 'https://robohash.org/hicinid.bmp?size=50x50&set=set1',
    'created_at': '2/4/16',
    'body': 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    'accuracy': 5,
    'communication': 4,
    'cleanliness': 5,
    'location': 5,
    'check_in': 5,
    'value': 1
  },
  {
    'room_id': 1,
    'first_name': 'Claudette',
    'user_avatar': 'https://robohash.org/ipsamsapienteplaceat.bmp?size=50x50&set=set1',
    'created_at': '2/1/16',
    'body': 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    'accuracy': 1,
    'communication': 5,
    'cleanliness': 2,
    'location': 3,
    'check_in': 3,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Candie',
    'user_avatar': 'https://robohash.org/numquamrepellendusvoluptatem.jpg?size=50x50&set=set1',
    'created_at': '11/6/17',
    'body': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    'accuracy': 4,
    'communication': 4,
    'cleanliness': 4,
    'location': 4,
    'check_in': 4,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Raymund',
    'user_avatar': 'https://robohash.org/voluptasvoluptasvoluptatibus.png?size=50x50&set=set1',
    'created_at': '2/28/16',
    'body': 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    'accuracy': 2,
    'communication': 4,
    'cleanliness': 1,
    'location': 1,
    'check_in': 3,
    'value': 4
  },
  {
    'room_id': 1,
    'first_name': 'Izabel',
    'user_avatar': 'https://robohash.org/molestiaesimiliqueab.jpg?size=50x50&set=set1',
    'created_at': '1/5/18',
    'body': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    'accuracy': 5,
    'communication': 5,
    'cleanliness': 1,
    'location': 4,
    'check_in': 1,
    'value': 1
  },
  {
    'room_id': 1,
    'first_name': 'Jard',
    'user_avatar': 'https://robohash.org/doloribussitblanditiis.bmp?size=50x50&set=set1',
    'created_at': '1/17/16',
    'body': 'Praesent blandit.',
    'accuracy': 5,
    'communication': 2,
    'cleanliness': 1,
    'location': 4,
    'check_in': 5,
    'value': 2
  },
  {
    'room_id': 1,
    'first_name': 'Charmane',
    'user_avatar': 'https://robohash.org/nequeconsectetursed.jpg?size=50x50&set=set1',
    'created_at': '9/8/16',
    'body': 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    'accuracy': 4,
    'communication': 3,
    'cleanliness': 1,
    'location': 5,
    'check_in': 1,
    'value': 5
  },
  {
    'room_id': 1,
    'first_name': 'Gabrila',
    'user_avatar': 'https://robohash.org/rerumearumut.png?size=50x50&set=set1',
    'created_at': '11/2/16',
    'body': 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    'accuracy': 2,
    'communication': 3,
    'cleanliness': 4,
    'location': 5,
    'check_in': 5,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Corri',
    'user_avatar': 'https://robohash.org/illonihilsit.bmp?size=50x50&set=set1',
    'created_at': '9/23/16',
    'body': 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    'accuracy': 1,
    'communication': 1,
    'cleanliness': 2,
    'location': 1,
    'check_in': 4,
    'value': 2
  },
  {
    'room_id': 1,
    'first_name': 'Bab',
    'user_avatar': 'https://robohash.org/architectoautdolorum.png?size=50x50&set=set1',
    'created_at': '1/14/16',
    'body': 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    'accuracy': 1,
    'communication': 5,
    'cleanliness': 4,
    'location': 3,
    'check_in': 1,
    'value': 1
  },
  {
    'room_id': 1,
    'first_name': 'Gradeigh',
    'user_avatar': 'https://robohash.org/fugiatipsaaliquid.jpg?size=50x50&set=set1',
    'created_at': '11/29/16',
    'body': 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    'accuracy': 1,
    'communication': 2,
    'cleanliness': 5,
    'location': 5,
    'check_in': 1,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Chiarra',
    'user_avatar': 'https://robohash.org/eiuseumet.png?size=50x50&set=set1',
    'created_at': '11/11/16',
    'body': 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    'accuracy': 3,
    'communication': 5,
    'cleanliness': 3,
    'location': 1,
    'check_in': 2,
    'value': 5
  },
  {
    'room_id': 1,
    'first_name': 'Melicent',
    'user_avatar': 'https://robohash.org/eumeumdolore.png?size=50x50&set=set1',
    'created_at': '12/23/17',
    'body': 'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    'accuracy': 1,
    'communication': 1,
    'cleanliness': 2,
    'location': 1,
    'check_in': 5,
    'value': 2
  },
  {
    'room_id': 1,
    'first_name': 'Jaquelyn',
    'user_avatar': 'https://robohash.org/dictaquiaut.jpg?size=50x50&set=set1',
    'created_at': '6/14/16',
    'body': 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    'accuracy': 1,
    'communication': 3,
    'cleanliness': 1,
    'location': 2,
    'check_in': 1,
    'value': 3
  },
  {
    'room_id': 1,
    'first_name': 'Boyd',
    'user_avatar': 'https://robohash.org/laborumquiset.bmp?size=50x50&set=set1',
    'created_at': '3/8/17',
    'body': 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    'accuracy': 5,
    'communication': 3,
    'cleanliness': 3,
    'location': 3,
    'check_in': 1,
    'value': 3
  }
  
];

export default mockData;