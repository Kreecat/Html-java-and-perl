#!/usr/bin/perl
use strict;
use warnings;

use DBI;

$myConnection = DBI->connect("DBI:Pg:dbname=DBNAME;host=localhost", "USERNAME", "PASSWORD");

my $dbh = DBI->connect($dsn, $user, $password, {
   PrintError       => 0,
   RaiseError       => 1,
   AutoCommit       => 1,
   FetchHashKeyName => 'NAME_lc',
});
 
# ...
 
$dbh->disconnect;

my $sql = <<'END_SQL';
CREATE TABLE people (
  id       INTEGER PRIMARY KEY,
  fname    VARCHAR(100),
  lname    VARCHAR(100),
  home   VARCHAR(100)
)
END_SQL
 
$dbh->do($sql);

var table_data = [ 
  { first_name : 'Rose',
    last_name  : 'Tyler',
    home       : 'Earth' },
  { first_name : 'Zoe',
    last_name  : 'Heriot',
    home       : 'Space Station W3'},
  { first_name : 'Jo',
    last_name  : 'Grant',
    home       : 'Earth'},
  { first_name : 'Leela',
    last_name  : null,
    home       : 'Unspecified'},
  { first_name : 'Romana',
    last_name  : null,
    home       : 'Gallifrey'},
  { first_name : 'Clara',
    last_name  : 'Oswald',
    home       : 'Earth'},
  { first_name : 'Adric',
    last_name  : null,
    home       : 'Alzarius'},
  { first_name : 'Susan',
    last_name  : 'Foreman',
    home       : 'Gallifrey'} ];

my $fname = 'Rose';
my $lname = 'Tyler',
my $home = 'earth';
$dbh->do('INSERT INTO people (fname, lname, home) VALUES (?, ?, ?)',
  undef,
  $fname, $lname, $home);