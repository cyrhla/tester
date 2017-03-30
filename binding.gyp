{
  "targets": [
    {
      "target_name": "type",
      "sources": [ "type.cc" ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    }
  ]
}
