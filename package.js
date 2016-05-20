/***************************************************************************
###     Copyright (C) 2014-2016 by Vaughn Iverson
###     job-collection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

var currentVersion = '1.3.4';

Package.describe({
  summary: "A persistent and reactive job queue for Meteor, supporting distributed workers that can run anywhere",
  name: 'vsivsi:job-collection',
  version: currentVersion,
  git: 'https://github.com/vsivsi/meteor-job-collection.git'
});

Package.onUse(function(api) {
  api.use('mrt:later@1.6.1', ['server','client']);
  api.use('coffeescript@1.0.17', ['server','client']);
  api.use('mongo@1.1.7', ['server','client']);
  api.use('check@1.2.1', ['server','client']);
  api.addFiles('job/src/job_class.coffee', ['server','client']);
  api.addFiles('src/shared.coffee', ['server','client']);
  api.addFiles('src/server.coffee', 'server');
  api.addFiles('src/client.coffee', 'client');
  api.export('Job');
  api.export('JobCollection');
});

Package.onTest(function (api) {
  api.use('vsivsi:job-collection@' + currentVersion, ['server','client']);
  api.use('mrt:later@1.6.1', ['server','client']);
  api.use('coffeescript@1.0.17', ['server','client']);
  api.use('check@1.2.1', ['server','client']);
  api.use('tinytest@1.0.10', ['server','client']);
  api.use('test-helpers@1.0.9', ['server','client']);
  api.use('ddp@1.2.5', 'client');
  api.addFiles('test/job_collection_tests.coffee', ['server', 'client']);
});
