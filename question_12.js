let to_do_list = ["sleep","eat","walk","sit","talk"];

to_do_list.unshift("watch_tv");

to_do_list.pop();

for(let i=0; i<to_do_list.length;i++){
    console.log(to_do_list[i]);
}